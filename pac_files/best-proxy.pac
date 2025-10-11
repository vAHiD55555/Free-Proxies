function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 67.43.228.250:16043",
        "SOCKS 47.79.93.202:1122",
        "SOCKS 217.160.224.54:8118",
        "SOCKS 20.27.14.220:8561",
        "SOCKS 196.204.83.235:1981",
        "SOCKS 72.10.160.91:2473",
        "SOCKS 103.192.158.115:46",
        "SOCKS 114.80.32.8:3081",
        "SOCKS 78.157.57.71:3128",
        "SOCKS 20.27.15.111:8561",
        "SOCKS 94.158.49.82:3128",
        "SOCKS 180.149.232.153:61245",
        "SOCKS 47.252.29.28:11222",
        "SOCKS 103.22.99.138:3125",
        "SOCKS 195.74.86.205:80",
        "SOCKS 200.116.198.222:9812",
        "SOCKS 72.10.160.170:13701",
        "SOCKS 222.59.173.105:45012",
        "SOCKS 65.108.203.37:28080",
        "SOCKS 143.198.147.156:8888",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}