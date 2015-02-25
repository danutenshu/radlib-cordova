RadioLibrary (RadLib)                                            V. Chan
                                                                 K. Cruz
                                                                J. James
                                                              D. Mistica
                                                                  D. Shu

Purpose

   To understand the other parameters of each function like connect and
   scan, the following hopes to explain the language and understand how
   to use our functions.


   
Programming Terms

   The following is a function header. In JavaScript, when RadLib's
   function is defined as shown below, the library name appended
   function to specify which library the function can be found in.

   radlib.directConnect = function(success, failure, reader)
   ====== =============            =======  =======  ======
"Library" "Function Name"          <-----"Parameters"----->

   A function "call" in a RadLib-user's program means using said
   function.

   The broad term for Window's "Command Prompt," is a shell, a user
   interface or command-line interface, where "android" is called.

   JavaScript allows functions to be parameters for other functions,
   as shown in many functions found in the User Manual API, e.g. the 
   success or failure parameters for connect and scan; if the function
   with these parameters successfully runs, it will call (run) the
   success, otherwise, the failure.

   Notice in our example program, the functions “turnOnBT” and
   “turnOffBT” are called without any parameters. To the program, if no
   parameters are given, it will set each of the parameters to NULL, or
   nothing.


   
(For windows) Understanding PATH and System Variables

   On a beginning programmer’s level, cmd, or the command prompt, runs
   from settings when it is started up the window. In other words, if you
   run cmd, it makes a temporary copy of the PATH for that instance and
   updating the local computer's PATH variable does not transfer over.
   Therefore, because that instance of cmd doesn't have the updated path,
   it won't be able to locate commands such as android or ant and run
   those progams (or executables). If you open a new instance of cmd, it
   will show the updated PATH.


   
RadLib Functions and Variables

   Functions
   =========
   updateTable    As used as the success function for connect in RadLib's
                  example program, it updates the database table.
   dumpLog        Prints a statement to the center of the screen.
   