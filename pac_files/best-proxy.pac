function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 72.10.160.91:4323",
        "SOCKS 103.118.85.144:1080",
        "SOCKS 51.158.124.167:16379",
        "SOCKS 36.255.98.163:4673",
        "SOCKS 103.114.53.2:8080",
        "SOCKS 36.255.98.177:16293",
        "SOCKS 185.123.143.251:3128",
        "SOCKS 121.169.46.116:1090",
        "SOCKS 114.236.93.203:15800",
        "SOCKS 62.60.131.195:5005",
        "SOCKS 45.204.208.22:60002",
        "SOCKS 62.60.131.193:4404",
        "SOCKS 85.214.244.174:3128",
        "SOCKS 176.113.73.104:3128",
        "SOCKS 36.255.98.182:8199",
        "SOCKS 117.68.147.8:3000",
        "SOCKS 103.191.196.71:8199",
        "SOCKS 62.60.131.194:8899",
        "SOCKS 157.175.147.228:10011",
        "SOCKS 205.185.114.78:5556",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}