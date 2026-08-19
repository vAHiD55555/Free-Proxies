function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 118.145.141.251:44025",
        "SOCKS 45.144.53.63:5000",
        "SOCKS 45.43.63.37:10808",
        "SOCKS 107.191.44.214:1081",
        "SOCKS 59.46.216.131:30001",
        "SOCKS 72.255.38.180:1080",
        "SOCKS 150.241.91.238:7777",
        "SOCKS 89.163.135.20:8236",
        "SOCKS 185.175.229.58:1080",
        "SOCKS 118.145.141.251:44156",
        "SOCKS 174.138.61.184:1080",
        "SOCKS 144.91.111.48:1088",
        "SOCKS 95.31.16.116:1081",
        "SOCKS 156.245.246.51:7890",
        "SOCKS 103.174.122.102:3128",
        "SOCKS 216.22.13.244:1084",
        "SOCKS 213.135.88.58:1080",
        "SOCKS 103.106.190.58:1080",
        "SOCKS 119.28.64.217:58367",
        "SOCKS 70.166.65.160:4145",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}