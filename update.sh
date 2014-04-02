dpkg-deb -b Minimality
#dpkg-deb -b CircleLove

dpkg-scanpackages -m . /dev/null >Packages
bzip2 Packages

./remove.sh
