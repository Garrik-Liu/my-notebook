# System Programing

## INTRODUCTION TO THE UNIXOPERATING SYSTEM

- A computer hardware cannot function without software;
- a computer system must possess an operating system;
- UNIX is available for all platforms;
- UNIX allows more than one user to share a computer system;
- UNIX is best choice for big businesses;
- Unix is case sensitive;

#### Unix Philosophy:

- a program (utility) should do one thing and do it well;
- a complex problem should be solved by combining multiple existing utilities;
- UNIX achieves this gaol using **pipes**;

#### Pipe:

- a mechanism that allows the user to specify that the **output** of one program is to be used as the **input** of another program;
- ![2020-2-8-9-44-56.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-2-8-9-44-56.png)
- 🌰 `ps -e|grep netscape|more`
  - `ps -e`: report status on every process now running
  - `grep` : search a file for a pattern
  - `more` : page through a text file

#### Login name and passwd:

- Unix check our login name in `/etc/passwd`
- match our password with the one in the encripted file `/etc/shadow`
- `/etc/shadow` can only be read by super users

#### Shells:

- A shell is a command line interpreter that reads and executes user commands
- A shell reads user inputs either from a terminal or,from a file called script file

![2020-2-8-9-50-48.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-2-8-9-50-48.png)

#### Files and Directory:

- The Unix file system is a hierarchical arrangement of files and directories
- The **root** directory is represented by the slash character (`/`)
- When a new directory is created, two filenames are automatically created
  - .(called dot) that refers to the **current** directory
  - ..(called dot-dot) that refers to the **parent** directory.

#### Standard Input, Standard Output, andStandard Error:

Whenever a new program is run, three **file descriptors** are opened:

- the standard input **stdin**, by default the keyboard
- the standard output **stdout**, by default the monitor
- the standard error **stderr**, by default the monitor.

Shells provide ways to redirect standard input and standard output:

- `ls > ls.output`, the outputs are stored in the newly created file `ls.output` instead of the monitor
- `mailx admin256@uwindsor.ca < assignment1.c`, the inputs for mailx come from the file assignment1.c instead of the keyboard

#### Programs and Processes:

- A **program** is an executable file residing on a disk;
- A **process** is an executing (running) program,usually with a limited life-time;
- A **process ID** (PID)is a unique nonnegative integer assigned by Unix, used to identify a process.
- `ps` reports process status.
- A process can obtain its PID by the `getpid()` system call, in C;
- A process can obtain its parent ID PPID by the `getppid()` system call, in C;

```c
#include <stdio.h>
int main(int argc, char *argv[]){
  printf("Hello, my PID is %d\n", getpid());
  printf("Hello, my PPID is %d\n", getppid());
  exit(0);
}

// Shell-Prompt > a.out
// Hello, my PID is 11723
// Hello, my PPID is 5598
```

#### Process Control

There are three primary functions (system calls)for process control:

- **fork**: allows an existing process to create a new process which is a copy of the caller
- **exec**: allows an existing process to be replaced with a new one.
- **wait**: allows a process to wait for one of its child processes to finish and also to get the termination status value.

#### User Identification

- User Id: Each user is assigned a user ID, aunique nonnegative integer called **uid**;
- The user ID is used by the kernel to check if the user has the appropriate permissions to perform certain tasks like accessing files;
- The user root(superuser) has **uid=0**
- A process can obtain its uid using the system call `getuid()`
- Group ID: a positive integer allowing to group different users into different categories with different privileges;
- both the user ID and the group ID are assigned by the system administrator at the time of the creation of the user account
- There is a group file, `/etc/group`, that maps group names into numeric IDs

#### Signals

Signals are used to **notify** a process of the occurrence of some condition:

- A division by zero : the signal **SIGFPE** is sent to the responsible process that has three choices:
  - Ignore the signal,
  - terminate the process
  - call a function tohandle the situation
- The Control-C key : when pressed, it generates a signal that causes the process receiving it to interrupt;
- Calling the functionkill: a process can send a signal to another process causing its death;

#### System calls and library functions

- Operating systems provide entry points forprograms to request services from the kernel.
- Entry points are called **system calls** in Unix.
- a system call cannot be replaced, however, a library function can be rewritten by the user.
- that a user process can invoke either asystem call or a library function.
- A library function might invoke a system call.

![2020-2-8-10-17-47.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-2-8-10-17-47.png)

## UNIX SHELLS

- A shell is a program that acts as an interface between a user and the operating system.
- A Unix shell is basically acommand interpreter
- A shell command can be：
  - internal(built-in) : the code to be executed is part ofthe shell；
  - external : the code to be executed resides in a sperate binary file；
- Shell terminates when the special character **CTR-D** is entered

#### Path and external commands

- For an external command, the shell searches for its file in the directories whose names are stored inthe shell variable **PATH**;
- Define the shell varibale PATH：
  - 🌰 `PATH=./:/usr/bin:∼/bin`
  - the shell looks for the command in order in：
    - the current directory, called `./`,
    - `/usr/bin/`
    - your-login-directory `/bin/`
- You can view your path : `echo $PATH`
- The command `which command-name` allows you to find the file location of the command.
- PATH is set in a shell start-up file `∼/.profile`
- `∼/` represents the current user loggin directory

#### Shells

Popular Unix Shell:
![2020-2-8-10-29-10.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-2-8-10-29-10.png)

- The name of your shell is in `/etc/passwd`
- You can get your running shell by typing `echo $SHELL`
- A shell is invoked either automatically, at the login, or manually;
- When a shell starts,
  1. reads special startup files (e.g., `/etc/profile` then `∼/.profile` for bash) that contain some initialization information,
  2. displays a "prompt" and waits for user commands then,
  3. the shell executes the user’s command and returns to step 2 unless the user has typed the characters `CTR-D` which will cause the shell to terminate.

#### Metacharacters

These are special characters with special meanings :

- `>`: Output redirection;
- `<`: Input redirection;
- `>>`: Output redirection, appends to a file;
- `*`: filename Wild card, matches 0 or more characters;
- `?`: filename Wild card, matches 1 character;
- <code>\`command\`</code>: command substitution, replaced by thecommand output;
  - echo The date of today is date:
    - The date of today is date;
  - echo The date of today is <code>\`date\`</code>:
    - The date of today is Sat Feb 8 10:46:41 EST 2020;
- `|`: Pipe between two commands;
  - `ls|wc -w`
  - output of ls is piped to wc to getthe number of files/directories.
  - `wc` displays a count of lines, wordsand characters in a file
- `;`: Used to sequence commands;
  - `date; ls; date`
- `||`: Executes a command if the previous one fails;
  - `cc prog1.c||CC prog1.c||gcc prog1.c`
- `&&`: Executes a command if the previous one succeeds;
  - `CC prog1.c -o prog1 && ./prog1`
- `&`: Executes a command in the background;
  - `netscape &`
- `#`: characters after this are ignored (comment);
- `$`: Expands the value of a shell variable;
  - `echo $PATH`
- `\`: Prevents special interpretation of next character;
  - `echo this is\&→this is &`

#### Scripts

- Shell have their own programming languages.
- A shell script, like a shell program, is a file that contains shell commands;
- Make the file executable: `chmod +x script_file`
- By running the `/bin/sh`: `sh script_file`
- Different shells have different syntax

#### Shell variables

- Two kinds of variables are supported by a shell:
  - user-defined variables
  - shell environment variables.
- When a subshell is created, it gets of copy of its parent shell environment variables
- **Shell environment variables**:
  - Used to customize the environment in which your shell runs
  - Most of these variables are initialized by the start-up file /etc/profile.
  - You can customize your environment by assigning different values to these variales in your `∼/.profile` file
- **User-defined variables**:
  - Used within shell scripts as temporary storage
  - You can use the **set** command without any parameters to display all the shell variables andtheir values.

**Some important read/write shell environment variables**:

- HOME: Full path name of your home directory
- PATH: List of directories to search for commands
- MAIL: Full path name of your mailbox
- USER: Your user-name
- SHELL: Your login shell
- PWD: Current working directory
- TERM: Type of your terminal

**Some important read-only shell variables**:

- `$0`: name of the program that is runing
- `$1. . .\$9`: values of command line arguments 1 through 9
- `$*`: values of all command line arguments
- `$#`: total number of command line arguments
- `$$`: Process ID of current process
- `$?`: Exit status of most recent command
- `$!`: PID of most recent background process

**Defining an environment(global) variable**:

- A user can also define a local shell variable thatcan be made a shell environment variable.

```bash
INCLUDES=$HOME/includes #local variable
echo $INCLUDES #/users/boufama/includesBecause
```

- INCLUDES is local variable, it will not be accessible by subshells
- INCLUDES can be made an environment variable
- By `export INCLUDES`

**Quoting**:

- The shell’s wildcard/variable/commandsubstitution mechanism can be inhibited using quotes;
  - Single quotes (’) inhibit wildcard/variable/command substitution.
  - Double quotes (“) inhibit wildcard (通配符) replacement only.
- 🌰：
- ![2020-2-8-11-7-25.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-2-8-11-7-25.png)

#### List variables

Syntax: `name=(arg1 arg2 ...)`

![2020-2-8-11-11-5.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-2-8-11-11-5.png)

- 上面 👆`${names[@]}` `@{names[*]}` 是一样的，都是输出数组的数量；

#### If Statement

![2020-2-8-11-9-53.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-2-8-11-9-53.png)

#### File expressions

- Syntax: `-option filename`
- The value is 1 if the selcted option is true and 0 otherwise.

![2020-2-8-11-16-54.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-2-8-11-16-54.png)

![2020-2-8-11-17-43.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-2-8-11-17-43.png)

#### while statement

![2020-2-8-11-18-5.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-2-8-11-18-5.png)

![2020-2-8-11-18-42.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-2-8-11-18-42.png)

#### switch statement

![2020-2-8-11-19-27.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-2-8-11-19-27.png)

```bash
echo '输入 1 到 4 之间的数字:'
echo '你输入的数字为:'
read aNum
case $aNum in
    1)  echo '你选择了 1'
    ;;
    2)  echo '你选择了 2'
    ;;
    3)  echo '你选择了 3'
    ;;
    4)  echo '你选择了 4'
    ;;
    *)  echo '你没有输入 1 到 4 之间的数字'
    ;;
esac
```

#### for statements

![2020-2-8-11-20-32.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-2-8-11-20-32.png)

## STANDARD INPUT/OUTPUT LIBRARY

- This library is specified by the ANSI C standard；
- this library handles details such as:
  - buffer allocation
  - performing I/O in optimal-sized chunks
- The header file ofthis library is `/usr/include/stdio.h`

#### Streams and FILE objects

- Opening or creating a file, associating a **stream** with the file;
- The function `fopen()` returns a pointer to the a FILE object;
- A FILE object is a structure that contains all needed information to manage a stream:
  - the file descriptor : a nonnegative integer used for the actual I/O
  - a pointer to a buffer for the stream
  - the size of the buffer
  - a count of the characters currently in the buffer
  - an error flag
  - an end-of-file flag

#### Buffering

- used to minimize the number of I/O system calls
- There are three types of buffering provided :
  - fully buffered
  - line buffered
  - unbuffered
- Fully buffered I/O:
  - In this case, actual I/O takes place only when the I/O buffer is full.
  - In particular, disk files are fully buffered by the standard I/O library
  - The buffer is usually created using **malloc** the first time I/O is performed on a stream
  - we can call the function **fflush()** to flush a stream forcing its associated buffer to be written even when it is partially filled
- Line buffered I/O:
  - In this case, actual I/O takesplace only when a new line character is encouteredon input or output.
  - Line buffering is typically used for the standard input and standard output streams.
  - actual I/O will also take place when theline buffer is full before a new line is encoutered.
- Unbuffered I/O:
  - The standard I/O library does notbuffer the characters;
  - each time we print or read a single character, the actual I/O operation takes place.
  - the standard error stream is normally unbuffered

#### Opening a Stream

- Three functions can be used to open a standard I/O stream：
  - `FILE *fopen(const char *f, const char *t)`
    - this is the most used one.
  - `FILE *freopen(const char *f,const char *t, FILE *fp)`
    - Opens a specified file on a specified stream, closingthe stream first if it was already open
  - `FILE *fdopen(int filedesc, const char *t)`
    - associates a standard I/O streamwith an existing file descriptor
- A file descriptor is a nonnegative integer used by thekernel to specify any open file
  - A file descriptor is typically returned by the system call `open()` that opens/creates a file, a pipe or, anetwork communication channel.
  - The function `fopen()` cannot be used to open a pipeor a network communication channel
  - we use the system call `open()` to get a file descriptor for a pipe or a channel
  - then we use `fdopen()` to associate it with a standard stream
- The argument type, `const char *t`, specifies how a stream is to be opened:
  - r for read
  - w for write
  - a for append at the end of the file
  - r+ for read and write
  - w+ for read and write
  - a+ for read and write at the end of the file.
  - ![2020-2-8-12-48-1.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-2-8-12-48-1.png)

#### Closing a file

- `nt fclose(FILE *fp)`
- This function will close any opened stream
- Any buffered output data is flushed,
- Any buffered input data is discarded,
- Any allocated buffer is released.

#### Reading from and writing to a stream

**There are 3 types of unformatted I/O** :

- Single-character I/O
- Line I/O: to read or write a line at a time
- Direct I/O: also called binary I/O. Useful whendealing with structures and binary information

#### Single-character Input functions

- `int getc(FILE *)`
- `int fgetc(FILE *)`
- `int getchar(void)`

![2020-2-8-12-57-4.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-2-8-12-57-4.png)

- these 3 functions returns -1 whether anerror or the end-of-file occurs
- For each stream, two flags are maintained in the FILE object : an error flag and an end-of-file flag.
  - `int ferror(FILE*)` returns nonzero for true, 0 otherwise
  - `int feof(FILE*)` returns nonzero for true, 0 otherwise
  - `void clearerr(FILE*)` clears both the error and the end-of-file flags.

#### Single-character Output functions

- `int putc(int c, FILE *fp)`: print a single character
- `int fputc(int c, FILE *fp)`: same asputc()exceptthat, `putc()` can be implemented as a macro whereas `fputc()` cannot.
- `int putchar(int c)`: equivalent toputc(c, stdin).
- All these functions returns the printed character **c** as an **int** when succesful and -1 otherwise.

![2020-2-8-13-1-59.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-2-8-13-1-59.png)

#### Random file access

- `long ftell(FILE *stream)`;
  - get the current value of the file-position indicator ofa stream
- `void rewind(FILE *stream)`;
  - reset file position indicator in a stream
- `int fseek(FILE *fp, long offset, int whence)`
  - redefine a file-position indicator in a stream :
  - SEEKSET: set position equal to offset bytes
  - SEEKCUR: set position to current locationplus offset
  - SEEKEND: set position to EOF plus offset.
