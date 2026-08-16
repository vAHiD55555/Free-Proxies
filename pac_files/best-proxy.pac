function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 5.255.117.250:1080",
        "SOCKS 171.253.95.3:1101",
        "SOCKS 152.53.20.190:20000",
        "SOCKS 85.198.82.207:1080",
        "SOCKS 107.191.44.214:1081",
        "SOCKS 138.199.25.13:3909",
        "SOCKS 138.199.25.13:3905",
        "SOCKS 15.204.235.27:1080",
        "SOCKS 176.126.70.111:16379",
        "SOCKS 158.46.23.102:10080",
        "SOCKS 27.155.93.29:5080",
        "SOCKS 195.135.255.98:1080",
        "SOCKS 82.102.11.164:3460",
        "SOCKS 159.195.49.27:8888",
        "SOCKS 45.77.155.196:50000",
        "SOCKS 88.218.206.170:22",
        "SOCKS 5.181.178.46:8080",
        "SOCKS 103.197.241.209:1080",
        "SOCKS 147.45.169.78:49153",
        "SOCKS 122.51.108.168:7890",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}