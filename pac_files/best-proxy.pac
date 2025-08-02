function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 72.195.114.169:4145",
        "SOCKS 37.120.162.180:42824",
        "SOCKS 80.78.30.182:3128",
        "SOCKS 98.152.200.61:8081",
        "SOCKS 172.104.4.144:9050",
        "SOCKS 42.114.11.222:16000",
        "SOCKS 8.215.31.146:1347",
        "SOCKS 42.118.0.25:16000",
        "SOCKS 144.22.175.58:1080",
        "SOCKS 51.158.70.181:16379",
        "SOCKS 139.180.138.188:5555",
        "SOCKS 114.80.36.254:3081",
        "SOCKS 43.224.10.43:6667",
        "SOCKS 47.243.75.202:58854",
        "SOCKS 43.251.86.69:1080",
        "SOCKS 195.158.8.123:3128",
        "SOCKS 72.10.164.178:28247",
        "SOCKS 218.64.122.99:7302",
        "SOCKS 172.105.209.111:8181",
        "SOCKS 65.108.203.35:28080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}