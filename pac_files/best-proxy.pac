function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 8.217.147.173:8080",
        "SOCKS 152.228.212.223:29272",
        "SOCKS 72.10.160.170:13701",
        "SOCKS 103.174.122.197:8199",
        "SOCKS 66.135.227.178:4145",
        "SOCKS 51.222.241.8:42378",
        "SOCKS 81.90.149.188:3128",
        "SOCKS 8.243.68.10:8080",
        "SOCKS 139.159.97.42:9798",
        "SOCKS 45.167.126.168:999",
        "SOCKS 51.158.124.167:16379",
        "SOCKS 72.10.164.178:2493",
        "SOCKS 8.142.3.145:3306",
        "SOCKS 61.178.99.43:7302",
        "SOCKS 152.53.36.101:27773",
        "SOCKS 144.91.95.238:58237",
        "SOCKS 72.10.160.171:23173",
        "SOCKS 129.146.226.84:1080",
        "SOCKS 139.59.7.217:36590",
        "SOCKS 144.91.78.34:20269",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}