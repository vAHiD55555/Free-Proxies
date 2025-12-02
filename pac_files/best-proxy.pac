function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 14.225.240.23:8562",
        "SOCKS 67.43.236.19:6787",
        "SOCKS 43.153.64.222:19404",
        "SOCKS 117.74.65.207:443",
        "SOCKS 103.174.178.145:2005",
        "SOCKS 222.59.173.105:44126",
        "SOCKS 171.238.103.65:1030",
        "SOCKS 205.185.126.51:5556",
        "SOCKS 209.141.58.213:5556",
        "SOCKS 192.252.214.17:4145",
        "SOCKS 218.78.65.202:6688",
        "SOCKS 171.238.88.27:1072",
        "SOCKS 135.125.97.184:38833",
        "SOCKS 43.153.64.222:19128",
        "SOCKS 154.72.204.78:8080",
        "SOCKS 144.91.95.238:58237",
        "SOCKS 171.238.88.111:2070",
        "SOCKS 37.200.66.166:9051",
        "SOCKS 8.220.194.115:1080",
        "SOCKS 89.163.135.59:16033",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}