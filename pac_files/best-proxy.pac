function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 140.82.35.234:44444",
        "SOCKS 180.157.93.11:7891",
        "SOCKS 195.239.84.21:1080",
        "SOCKS 115.127.53.114:1080",
        "SOCKS 43.173.124.23:8081",
        "SOCKS 89.44.86.33:10800",
        "SOCKS 131.153.163.130:36100",
        "SOCKS 82.22.174.113:1080",
        "SOCKS 176.12.65.24:443",
        "SOCKS 212.3.127.242:10801",
        "SOCKS 118.194.228.2:10808",
        "SOCKS 18.163.122.172:3128",
        "SOCKS 47.245.117.43:80",
        "SOCKS 47.250.11.111:51",
        "SOCKS 167.86.79.35:1080",
        "SOCKS 119.148.62.42:22122",
        "SOCKS 146.190.60.147:8003",
        "SOCKS 194.177.28.66:10808",
        "SOCKS 8.215.112.240:7777",
        "SOCKS 82.102.11.164:3460",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}