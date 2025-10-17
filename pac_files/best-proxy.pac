function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 185.93.89.146:4359",
        "SOCKS 117.74.65.207:443",
        "SOCKS 185.93.89.182:4459",
        "SOCKS 185.93.89.147:5101",
        "SOCKS 103.242.175.241:8899",
        "SOCKS 185.93.89.183:15918",
        "SOCKS 45.14.224.247:80",
        "SOCKS 144.91.78.34:20269",
        "SOCKS 89.58.45.94:13595",
        "SOCKS 185.93.89.187:10586",
        "SOCKS 185.93.89.158:8002",
        "SOCKS 185.93.89.181:6615",
        "SOCKS 185.93.89.182:14921",
        "SOCKS 185.93.89.145:4028",
        "SOCKS 94.143.137.77:3128",
        "SOCKS 185.93.89.144:10071",
        "SOCKS 91.151.88.220:6618",
        "SOCKS 185.93.89.158:10104",
        "SOCKS 20.210.76.178:8561",
        "SOCKS 171.228.116.71:2001",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}