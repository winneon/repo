rm -r Packages.bz2
dpkg-deb -b Minimality
dpkg-scanpackages -m . /dev/null >Packages
bzip2 Packages
