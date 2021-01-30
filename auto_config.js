let hostname = "Rooter1"
let area = "51"

let network00 = "180.18.0.0"
let ipAddress00 = "180.18.0.1"
let subnetMask00 = "255.255.0.0"
let wildcardMask00 = "0.0.0.7"

let network01 = "20.0.0.0"
let ipAddress01 = "20.0.0.5"
let subnetMask01 = "255.0.0.0"
let wildcardMask01 = "0.0.0.15"

let network000 = "41.0.0.24"
let ipAddress000 = "41.0.0.26"
let subnetMask000 = "255.255.255.252"
let wildcardMask000 = "0.0.0.3"

let network001 = "41.0.0.20"
let ipAddress001 = "41.0.0.22"
let subnetMask001 = "255.255.255.252"
let wildcardMask001 = "0.0.0.3"

let network010 = "41.0.0.4"
let ipAddress010 = "41.0.0.6"
let subnetMask010 = "255.255.255.252"
let wildcardMask010 = "0.0.0.3"

let network011 = "41.0.0.8"
let ipAddress011 = "41.0.0.9"
let subnetMask011 = "255.255.255.252"
let wildcardMask011 = "0.0.0.3"


function fa1se1() { console.log(`
en
conf t
hostname ${hostname}

in fa 0/0
ip ad ${ipAddress00} ${subnetMask00}
no sh

in se 0/0/0
ip ad ${ipAddress000} ${subnetMask000}
no sh

ip dhcp pool ${hostname}1
network ${network00} ${subnetMask00}
default-router ${ipAddress00}
dns-server 8.8.8.8

router ospf 1
network ${network00} ${wildcardMask00} area ${area}
network ${network000} ${wildcardMask000} area ${area}
`);
};
fa1se1()
function fa2se1() { console.log(`
en
conf t
hostname ${hostname}

in fa 0/0
ip ad ${ipAddress00} ${subnetMask00}
no sh

in fa 0/1
ip ad ${ipAddress01} ${subnetMask01}
no sh

in se 0/0/0
ip ad ${ipAddress000} ${subnetMask000}
no sh

ip dhcp pool ${hostname}1
network ${network00} ${subnetMask00}
default-router ${ipAddress00}
dns-server 8.8.8.8

ip dhcp pool ${hostname}2
network ${network01} ${subnetMask01}
default-router ${ipAddress01}
dns-server 8.8.8.8

router ospf 1
network ${network00} ${wildcardMask00} area ${area}
network ${network01} ${wildcardMask01} area ${area}
network ${network000} ${wildcardMask000} area ${area}
`);
};


function fa1se2() { console.log(`
en
conf t
hostname ${hostname}
!
in fa 0/0
ip ad ${ipAddress00} ${subnetMask00}
no sh
!
in se 0/0/0
ip ad ${ipAddress000} ${subnetMask000}
no sh
!
in se 0/0/1
ip ad ${ipAddress001} ${subnetMask001}
no sh
!
ip dhcp pool ${hostname}1
network ${network00} ${subnetMask00}
default-router ${ipAddress00}
dns-server 8.8.8.8
!
router ospf 1
network ${network00} ${wildcardMask00} area ${area}
network ${network000} ${wildcardMask000} area ${area}
network ${network001} ${wildcardMask001} area ${area}

`);
};

function se4() {console.log(`
en
conf t
hostname ${hostname}
!
!
!

in se 0/0/0
ip ad ${ipAddress000} ${subnetMask000}
no sh
!
!
!

in se 0/0/1
ip ad ${ipAddress001} ${subnetMask001}
no sh
!
!
!

in se 0/1/0
ip ad ${ipAddress010} ${subnetMask010}
no sh
!
!
!

in se 0/1/1
ip ad ${ipAddress011} ${subnetMask011}
no sh
!
!
!

router ospf 1
network ${network000} ${wildcardMask000} area ${area}
network ${network001} ${wildcardMask001} area ${area}
network ${network010} ${wildcardMask010} area ${area}
network ${network011} ${wildcardMask011} area ${area}
`);
};













