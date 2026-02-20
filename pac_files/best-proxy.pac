function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 61.160.66.130:5555",
        "SOCKS 72.221.196.157:35904",
        "SOCKS 123.54.197.16:21899",
        "SOCKS 222.71.131.131:1080",
        "SOCKS 125.66.165.154:7302",
        "SOCKS 80.253.246.238:6618",
        "SOCKS 61.171.50.169:6688",
        "SOCKS 20.27.15.111:8561",
        "SOCKS 67.205.153.110:51528",
        "SOCKS 203.25.208.163:1145",
        "SOCKS 46.0.205.4:1080",
        "SOCKS 194.163.160.97:10808",
        "SOCKS 91.121.48.221:38711",
        "SOCKS 8.142.3.145:3306",
        "SOCKS 45.88.0.117:3128",
        "SOCKS 144.91.78.34:20269",
        "SOCKS 123.54.197.18:22380",
        "SOCKS 103.124.139.137:8080",
        "SOCKS 205.185.114.78:5556",
        "SOCKS 179.96.28.58:80",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}