/*global cordova*/
module.exports = {

	/**
		function to connect to a bluetooth device.
		#success callback function on success
		#failure callback function on error
		#address empty string "" to scan for nearby devices,
		         otherwise provide a valid bluetooth MAC address in string format
	*/
	connectStream: function(success, failure, address){
		if(address == ""){//scan for nearby bluetooth devices
			cordova.exec(success, failure, "BluetoothScanner", "startDiscovery", []);
		}else{//connect directly to the provided address
			cordova.exec(success, failure, "BluetoothScanner", "connect", [address]);
		}
	},

	/*
		function to connect to a bluetooth device.
		
		Successful callback will return an object with fields "id" and "report".
			id will be a string of the tag's ID.
			report will be a string of "seen" or "lost".
		#success callback function on success
		#failure callback function on error
		#address empty string "" to scan for nearby devices,
		         otherwise provide a valid bluetooth MAC address in string format
	*/
	connectParsed: function(success, failure, address){
		var tagId, result;
		var returnVal = {};
		var buffer = "";
		//parser function, expects frames "starting with HEADER"
		var parsedResults = function(data){
			buffer = buffer.concat(data);
			var nextFrameStart = buffer.lastIndexOf("~~~~~~~~HEADER~~~~~~~~");
			if(nextFrameStart > 0){
				var currentFrame = buffer.substring(0, nextFrameStart);
				var idIndex = currentFrame.indexOf("Card UID: ");
				if(idIndex >= 0){//skip past header
					idIndex += 10;
					returnVal.id = currentFrame.substring(idIndex, idIndex + 11);
				}
				if(currentFrame.indexOf("responded with NAK") >= 0){//msg given when seen
					returnVal.report = "seen";
					success(returnVal);//return object with "reader", "id", and "firstSeen" fields
				}
				else if(currentFrame.indexOf("Timeout in communication") >= 0){//msg given when lost
					returnVal.report = "lost";
				}   
			    //start building up the next frame
			    buffer = buffer.substring(nextFrameStart, buffer.length);
			}
		};
		if(address == ""){//scan for nearby bluetooth devices
			cordova.exec(parsedResults, failure, "BluetoothScanner", "startDiscovery", []);
		}else{//connect directly to the provided address
			cordova.exec(parsedResults ,failure, "BluetoothScanner", "connect", [address]);
		}
	},
	
	/**
		stop bluetooth discovery
	*/
	stopDiscovery: function (success, failure) {
		cordova.exec(success, failure, "BluetoothScanner", "stopDiscovery", []);
	},
	
	/**
		function to turn on bluetooth
	*/
	turnOnBT: function(success, failure){
		cordova.exec(success, failure, "BluetoothScanner", "turnOnBT", []);
	},
	
	/**
		function to turn on bluetooth
	*/
	turnOffBT: function(success, failure){
		cordova.exec(success, failure, "BluetoothScanner", "turnOffBT", []);
	},
};


