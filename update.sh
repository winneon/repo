./remove.sh

dpkg-deb -b Minimality
dpkg-deb -b CircleLove
dpkg-deb -b Incepted

dpkg-scanpackages -m . /dev/null >Packages
bzip2 Packages
