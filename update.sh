./remove.sh

dpkg-deb -b Minimality
dpkg-deb -b CircleLove
dpkg-deb -b Incepted
dpkg-deb -b Clockwork
dpkg-deb -b Slide
dpkg-deb -b LCD

dpkg-scanpackages -m . /dev/null >Packages
bzip2 Packages
