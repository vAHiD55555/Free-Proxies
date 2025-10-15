function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 152.53.171.242:38245",
        "SOCKS 31.193.193.69:1488",
        "SOCKS 51.158.64.130:16379",
        "SOCKS 72.10.164.178:2493",
        "SOCKS 5.129.246.91:1080",
        "SOCKS 176.119.36.76:1081",
        "SOCKS 185.93.89.180:9105",
        "SOCKS 185.93.89.187:8001",
        "SOCKS 194.58.57.71:1090",
        "SOCKS 185.93.89.188:5080",
        "SOCKS 115.127.112.34:1080",
        "SOCKS 91.151.88.220:6618",
        "SOCKS 185.93.89.180:8900",
        "SOCKS 173.236.187.104:40355",
        "SOCKS 149.202.75.85:36666",
        "SOCKS 212.33.248.45:1080",
        "SOCKS 67.205.153.110:51528",
        "SOCKS 38.183.144.18:1080",
        "SOCKS 72.10.160.170:13701",
        "SOCKS 163.172.161.35:16379",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}