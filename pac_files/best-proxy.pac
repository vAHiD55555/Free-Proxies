function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 117.68.147.8:3000",
        "SOCKS 35.183.64.191:29715",
        "SOCKS 61.49.87.3:80",
        "SOCKS 18.188.141.177:1145",
        "SOCKS 83.169.255.92:1080",
        "SOCKS 89.58.45.94:36853",
        "SOCKS 89.58.45.94:32072",
        "SOCKS 115.127.80.1:9090",
        "SOCKS 51.15.5.21:60349",
        "SOCKS 98.190.102.40:4145",
        "SOCKS 89.58.45.94:27117",
        "SOCKS 160.25.8.141:11011",
        "SOCKS 51.15.196.107:16379",
        "SOCKS 45.61.139.153:2525",
        "SOCKS 89.58.45.94:11693",
        "SOCKS 137.184.228.194:40886",
        "SOCKS 89.58.45.94:10099",
        "SOCKS 188.227.224.110:9051",
        "SOCKS 176.74.197.163:36918",
        "SOCKS 116.202.103.223:29210",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}