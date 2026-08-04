function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 203.25.208.163:1145",
        "SOCKS 146.103.125.38:9054",
        "SOCKS 192.73.242.77:9050",
        "SOCKS 137.184.58.163:9050",
        "SOCKS 103.208.102.1:8080",
        "SOCKS 220.158.232.118:1080",
        "SOCKS 193.176.244.151:4885",
        "SOCKS 82.71.110.129:8888",
        "SOCKS 154.219.125.240:58367",
        "SOCKS 3.128.83.74:17000",
        "SOCKS 81.0.49.104:18500",
        "SOCKS 173.249.20.169:9060",
        "SOCKS 212.77.75.25:1088",
        "SOCKS 45.194.33.12:30001",
        "SOCKS 138.2.216.186:1080",
        "SOCKS 51.178.49.241:1088",
        "SOCKS 220.158.233.26:1080",
        "SOCKS 47.75.116.41:10800",
        "SOCKS 43.161.253.113:1080",
        "SOCKS 193.233.218.213:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}