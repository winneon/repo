Hi, I'm Karen Tsai (angelXwind), that girl who runs aXw-Repo at http://cydia.angelxwind.net/

...And http://exile90.angelxwind.net/cydia/ etc

Anyway...

Since the creator of the circul8 and parentheme iOS themes asked me a question about how to make a Cydia repo...

I decided to just make this base package with comments that describe what each step does.

It includes:

1. An example package built in "exploded format"
2. A DEB (OpenSSL) that is prebuilt, and obtained from another source.
3. Neccesary files that Cydia parses and reads
4. update.sh, which builds the Package index and compresses it.
5. A beautiful icon designed by the world-famous artist Karen Tsai (okay no)

Please take the time to read these files by opening them up in a text editor that is not TextEdit or Notepad, please.

I recommend using Sublime Text 2 (multiplatform: Windows, OS X, Linux)

That's available here.

http://www.sublimetext.com/2

I assume you already know how to set up a simple httpd (web server) to host these files on, or have an existing host you can use.

If not, then there are many tutorials for doing that available on Google.

If you are using a Debian-based distribution (Ubuntu, Debian, #!, etc.) of Linux as your web server OS, then everything here will work out of the box. Update script, etc.

If not... you can either

1. attempt to install dpkg and make it work
or
2. use your iOS device for all package generation purposes (run everything there), then just copy the files out and use your server as a simple file server.

I personally use Debian on my server.

If you're using OS X as your web server OS, you may try your luck with Homebrew ( http://brew.sh/ ) and/or MacPorts ( http://macports.org/ ), which, IN THEORY, should work. I haven't tested it, but it SHOULD work. Be prepared to modify my scripts if anything does happen.

If that fails, you can still use run everything straight on your iOS device.

If you're using Windows as your web server OS, it's still possible, but none of the package generation operations will be possible. (maybe with Cygwin, but... no. just. no.)

Most likely, if you're using Windows as an httpd, you'll only be able to use it as a simple file server.

In other words, run all the scripts, etc. on your iOS device, and just copy out the DEBs and Package listings (those are the only two files that are updated, the rest stay the same) to your server root.

My Cydia Depiction system is NOT included with this archive, because well...

Honestly, the code for that is just awful.

I took a "okay does it work in WebKit? yes? OKAY THEN LET'S GO" approach with that, and it is really dirty.

It's also built off Jay Freeman (saurik)'s iPhone.css, which is used in his Depiction system.

Just a little point of reference in case you decide to try to make your own. c:

...Yeah, this is a horribly-formatted README.

I'll probably redo it when I have time.