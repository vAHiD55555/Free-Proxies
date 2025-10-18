function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 204.93.169.232:60755",
        "SOCKS 185.93.89.144:10013",
        "SOCKS 185.93.89.182:14921",
        "SOCKS 222.71.131.131:1080",
        "SOCKS 72.221.196.157:35904",
        "SOCKS 185.93.89.164:4134",
        "SOCKS 51.195.139.95:44648",
        "SOCKS 89.58.45.94:13321",
        "SOCKS 67.43.236.20:3209",
        "SOCKS 91.151.88.220:6618",
        "SOCKS 185.93.89.147:11775",
        "SOCKS 89.58.45.94:46224",
        "SOCKS 144.91.95.238:58237",
        "SOCKS 185.93.89.182:8168",
        "SOCKS 185.93.89.158:12000",
        "SOCKS 185.93.89.163:8728",
        "SOCKS 185.93.89.187:8128",
        "SOCKS 185.93.89.180:10005",
        "SOCKS 185.93.89.181:20000",
        "SOCKS 175.24.2.65:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}