function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 183.249.5.117:22222",
        "SOCKS 202.62.52.120:1080",
        "SOCKS 46.10.208.106:8192",
        "SOCKS 46.21.153.16:3128",
        "SOCKS 36.255.98.165:46033",
        "SOCKS 176.74.197.163:36918",
        "SOCKS 115.127.80.1:9090",
        "SOCKS 103.242.175.241:8899",
        "SOCKS 43.131.9.114:1777",
        "SOCKS 5.129.253.135:10808",
        "SOCKS 185.44.232.30:53281",
        "SOCKS 36.255.98.154:4224",
        "SOCKS 193.56.255.179:3128",
        "SOCKS 8.215.88.68:7777",
        "SOCKS 51.15.133.214:16379",
        "SOCKS 91.151.88.220:6618",
        "SOCKS 101.91.242.198:6688",
        "SOCKS 169.63.230.169:8081",
        "SOCKS 67.43.236.20:31241",
        "SOCKS 152.53.171.242:20589",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}