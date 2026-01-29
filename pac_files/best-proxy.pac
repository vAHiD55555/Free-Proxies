function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 147.45.179.84:1082",
        "SOCKS 46.21.153.16:3128",
        "SOCKS 193.239.86.248:3128",
        "SOCKS 62.60.131.203:4060",
        "SOCKS 36.255.98.180:10349",
        "SOCKS 62.60.131.203:5083",
        "SOCKS 125.141.133.49:5566",
        "SOCKS 174.138.61.184:1080",
        "SOCKS 180.183.97.16:8080",
        "SOCKS 163.5.128.165:14270",
        "SOCKS 195.98.82.62:1080",
        "SOCKS 36.255.98.153:12029",
        "SOCKS 62.60.131.203:5131",
        "SOCKS 144.91.118.176:3128",
        "SOCKS 62.60.131.188:5201",
        "SOCKS 112.86.116.24:1080",
        "SOCKS 72.10.160.173:10073",
        "SOCKS 36.255.98.168:4017",
        "SOCKS 5.199.166.247:9077",
        "SOCKS 103.174.178.145:2005",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}