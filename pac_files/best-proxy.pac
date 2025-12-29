function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 20.27.15.111:8561",
        "SOCKS 198.177.254.157:4145",
        "SOCKS 80.253.246.238:6618",
        "SOCKS 87.120.166.178:8080",
        "SOCKS 163.172.161.35:16379",
        "SOCKS 181.214.39.72:5719",
        "SOCKS 112.86.116.24:1080",
        "SOCKS 104.206.98.154:3128",
        "SOCKS 213.76.184.53:3128",
        "SOCKS 118.70.151.55:1080",
        "SOCKS 45.166.93.113:999",
        "SOCKS 45.22.209.157:8888",
        "SOCKS 68.71.240.210:4145",
        "SOCKS 144.91.78.34:20269",
        "SOCKS 67.43.236.18:18447",
        "SOCKS 103.242.175.241:8899",
        "SOCKS 202.62.37.33:1080",
        "SOCKS 95.85.243.160:10983",
        "SOCKS 46.10.208.106:8192",
        "SOCKS 115.127.182.126:2589",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}