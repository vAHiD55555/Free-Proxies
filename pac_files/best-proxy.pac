function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 103.93.93.66:8080",
        "SOCKS 31.211.142.115:8192",
        "SOCKS 152.53.171.242:37453",
        "SOCKS 125.141.133.49:5566",
        "SOCKS 185.61.38.140:1080",
        "SOCKS 72.10.160.173:8253",
        "SOCKS 152.53.171.242:13485",
        "SOCKS 40.172.223.148:80",
        "SOCKS 152.53.171.242:15143",
        "SOCKS 173.212.237.43:43648",
        "SOCKS 47.250.56.98:19190",
        "SOCKS 5.133.219.4:63434",
        "SOCKS 152.53.171.242:46065",
        "SOCKS 123.182.233.70:7302",
        "SOCKS 51.89.68.78:9050",
        "SOCKS 176.74.197.163:36918",
        "SOCKS 152.53.171.242:16507",
        "SOCKS 82.26.74.193:9004",
        "SOCKS 185.118.51.230:3128",
        "SOCKS 193.216.224.108:8192",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}