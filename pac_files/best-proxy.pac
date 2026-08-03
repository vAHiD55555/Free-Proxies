function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 223.25.110.37:8199",
        "SOCKS 62.60.230.196:1080",
        "SOCKS 185.185.80.58:1088",
        "SOCKS 140.245.238.56:53",
        "SOCKS 144.24.111.128:1088",
        "SOCKS 213.199.47.140:1080",
        "SOCKS 143.244.129.201:9090",
        "SOCKS 104.207.153.122:10808",
        "SOCKS 3.129.27.9:17000",
        "SOCKS 5.255.117.127:1080",
        "SOCKS 147.45.72.212:44816",
        "SOCKS 173.249.20.169:9060",
        "SOCKS 103.66.46.150:69",
        "SOCKS 51.222.13.193:10084",
        "SOCKS 186.26.95.249:61445",
        "SOCKS 77.95.201.16:9150",
        "SOCKS 150.241.107.0:1080",
        "SOCKS 146.235.220.109:9050",
        "SOCKS 72.195.34.42:4145",
        "SOCKS 212.46.208.183:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}