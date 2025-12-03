function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 184.185.2.45:4145",
        "SOCKS 43.247.13.234:5678",
        "SOCKS 125.141.133.49:5566",
        "SOCKS 171.234.50.255:5516",
        "SOCKS 61.160.66.130:5555",
        "SOCKS 175.24.2.65:1080",
        "SOCKS 201.217.28.203:88",
        "SOCKS 171.238.89.141:1092",
        "SOCKS 116.203.139.209:5678",
        "SOCKS 157.180.121.252:53740",
        "SOCKS 103.189.63.149:53053",
        "SOCKS 182.53.202.208:8080",
        "SOCKS 89.58.45.94:18723",
        "SOCKS 43.153.64.222:15439",
        "SOCKS 51.15.240.207:16379",
        "SOCKS 152.228.212.223:29272",
        "SOCKS 138.201.139.252:12344",
        "SOCKS 13.246.35.124:240",
        "SOCKS 138.199.25.13:3904",
        "SOCKS 51.158.64.130:16379",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}