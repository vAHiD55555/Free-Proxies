function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 8.222.204.176:1011",
        "SOCKS 67.43.236.19:25371",
        "SOCKS 67.43.236.21:8561",
        "SOCKS 193.227.129.215:52203",
        "SOCKS 51.15.210.79:16379",
        "SOCKS 46.10.229.243:7777",
        "SOCKS 61.171.50.169:6688",
        "SOCKS 176.119.36.76:1080",
        "SOCKS 123.253.108.109:8999",
        "SOCKS 185.93.89.187:4289",
        "SOCKS 93.113.63.73:33100",
        "SOCKS 178.49.22.23:1080",
        "SOCKS 47.82.83.143:5555",
        "SOCKS 193.216.224.108:8192",
        "SOCKS 51.15.240.207:16379",
        "SOCKS 103.81.175.218:28022",
        "SOCKS 152.53.36.101:37777",
        "SOCKS 152.53.36.101:29661",
        "SOCKS 161.35.70.249:1080",
        "SOCKS 47.79.22.55:1011",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}