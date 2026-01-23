function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 61.171.50.169:6688",
        "SOCKS 173.236.187.104:40355",
        "SOCKS 144.91.95.238:58237",
        "SOCKS 121.169.46.116:1090",
        "SOCKS 36.255.98.160:5118",
        "SOCKS 112.86.116.24:1080",
        "SOCKS 144.91.118.176:3128",
        "SOCKS 113.100.209.184:3128",
        "SOCKS 157.230.1.108:14070",
        "SOCKS 79.122.230.20:8080",
        "SOCKS 51.158.68.133:8811",
        "SOCKS 1.180.49.222:7302",
        "SOCKS 222.71.131.131:1080",
        "SOCKS 205.185.123.62:2555",
        "SOCKS 62.60.131.203:8031",
        "SOCKS 46.10.208.106:8192",
        "SOCKS 218.4.192.62:7302",
        "SOCKS 83.219.243.223:12046",
        "SOCKS 176.74.197.163:36918",
        "SOCKS 62.60.131.183:7658",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}