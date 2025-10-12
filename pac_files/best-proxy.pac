function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 98.190.102.40:4145",
        "SOCKS 78.12.223.246:1720",
        "SOCKS 188.227.224.110:9051",
        "SOCKS 31.129.253.30:40223",
        "SOCKS 143.47.59.115:8118",
        "SOCKS 103.204.211.48:32255",
        "SOCKS 72.10.164.178:2493",
        "SOCKS 65.108.203.35:28080",
        "SOCKS 185.93.89.145:4085",
        "SOCKS 24.249.199.4:4145",
        "SOCKS 98.185.94.94:4145",
        "SOCKS 135.181.203.208:80",
        "SOCKS 168.181.191.153:7080",
        "SOCKS 222.129.32.188:57114",
        "SOCKS 8.210.76.40:1011",
        "SOCKS 38.159.229.101:999",
        "SOCKS 157.66.16.36:5568",
        "SOCKS 103.19.130.50:8080",
        "SOCKS 67.43.236.18:3927",
        "SOCKS 34.216.224.9:12542",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}