function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 205.185.126.51:5556",
        "SOCKS 98.126.23.24:2846",
        "SOCKS 20.27.11.248:8561",
        "SOCKS 213.250.198.146:7777",
        "SOCKS 137.184.228.194:40886",
        "SOCKS 8.222.151.218:5566",
        "SOCKS 144.91.95.238:58237",
        "SOCKS 65.21.89.117:42294",
        "SOCKS 20.210.76.178:8561",
        "SOCKS 101.91.242.198:6688",
        "SOCKS 20.210.39.153:8561",
        "SOCKS 8.219.57.110:1100",
        "SOCKS 175.24.2.65:1080",
        "SOCKS 185.118.51.230:3128",
        "SOCKS 69.164.206.96:13024",
        "SOCKS 64.227.131.240:1080",
        "SOCKS 121.205.213.141:4216",
        "SOCKS 47.238.203.170:50000",
        "SOCKS 47.237.77.205:1011",
        "SOCKS 159.65.166.126:8118",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}