function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 51.222.241.8:42378",
        "SOCKS 204.93.169.232:60755",
        "SOCKS 61.171.50.169:6688",
        "SOCKS 68.183.90.210:59166",
        "SOCKS 160.25.8.131:11011",
        "SOCKS 67.43.236.20:3209",
        "SOCKS 103.247.23.28:9223",
        "SOCKS 149.202.75.85:36666",
        "SOCKS 5.129.246.91:1080",
        "SOCKS 125.141.139.198:5566",
        "SOCKS 205.185.116.159:5556",
        "SOCKS 20.27.15.111:8561",
        "SOCKS 218.4.192.62:7302",
        "SOCKS 51.89.68.78:9050",
        "SOCKS 45.236.215.111:54029",
        "SOCKS 103.127.223.126:1080",
        "SOCKS 43.138.216.160:9255",
        "SOCKS 103.93.93.178:8181",
        "SOCKS 174.138.62.182:43715",
        "SOCKS 157.230.1.108:14070",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}