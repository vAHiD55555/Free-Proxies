function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 139.180.140.254:1080",
        "SOCKS 52.38.230.247:3128",
        "SOCKS 104.37.175.200:22292",
        "SOCKS 193.216.224.108:8192",
        "SOCKS 185.38.111.1:8080",
        "SOCKS 185.189.112.157:3128",
        "SOCKS 223.113.89.138:1080",
        "SOCKS 180.183.97.16:8080",
        "SOCKS 176.102.33.215:4080",
        "SOCKS 103.114.53.2:8080",
        "SOCKS 61.178.99.43:7302",
        "SOCKS 112.86.116.24:1080",
        "SOCKS 218.4.192.62:7302",
        "SOCKS 125.141.139.110:5566",
        "SOCKS 113.195.224.222:9999",
        "SOCKS 144.91.118.176:3128",
        "SOCKS 51.195.139.95:44648",
        "SOCKS 51.89.68.78:9050",
        "SOCKS 115.221.242.131:9999",
        "SOCKS 223.204.164.148:8080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}