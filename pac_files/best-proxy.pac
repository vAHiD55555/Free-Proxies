function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 47.88.18.204:8023",
        "SOCKS 161.35.70.249:1080",
        "SOCKS 123.56.89.191:1081",
        "SOCKS 208.102.24.225:8888",
        "SOCKS 184.185.2.45:4145",
        "SOCKS 115.221.245.167:1080",
        "SOCKS 222.129.32.188:57114",
        "SOCKS 78.157.57.71:3128",
        "SOCKS 152.53.168.53:44887",
        "SOCKS 79.127.54.89:3130",
        "SOCKS 47.252.29.28:11222",
        "SOCKS 90.156.197.189:8080",
        "SOCKS 176.126.103.194:44214",
        "SOCKS 220.248.188.75:17211",
        "SOCKS 51.250.108.153:1080",
        "SOCKS 98.190.102.40:4145",
        "SOCKS 8.210.117.141:8888",
        "SOCKS 43.224.10.43:6667",
        "SOCKS 212.110.188.202:34409",
        "SOCKS 219.147.112.150:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}