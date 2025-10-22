function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 113.212.109.40:1080",
        "SOCKS 162.243.149.86:31028",
        "SOCKS 47.245.83.61:1011",
        "SOCKS 156.244.15.246:1100",
        "SOCKS 20.210.39.153:8561",
        "SOCKS 85.172.55.85:1080",
        "SOCKS 31.211.130.237:8192",
        "SOCKS 61.178.99.43:7302",
        "SOCKS 40.192.27.104:41",
        "SOCKS 115.127.36.190:1088",
        "SOCKS 152.53.171.242:10079",
        "SOCKS 78.12.193.250:16010",
        "SOCKS 120.224.234.71:7300",
        "SOCKS 103.109.57.42:3629",
        "SOCKS 137.184.152.66:20002",
        "SOCKS 152.53.36.101:36965",
        "SOCKS 67.43.236.18:3927",
        "SOCKS 123.182.233.70:7302",
        "SOCKS 183.166.132.124:3000",
        "SOCKS 152.53.171.242:15335",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}