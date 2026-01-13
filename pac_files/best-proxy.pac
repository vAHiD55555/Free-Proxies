function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 20.27.11.248:8561",
        "SOCKS 5.255.113.177:1080",
        "SOCKS 61.178.99.43:7302",
        "SOCKS 197.164.101.11:1981",
        "SOCKS 178.49.22.23:1080",
        "SOCKS 67.205.153.110:51528",
        "SOCKS 80.253.246.238:6618",
        "SOCKS 45.144.234.129:53922",
        "SOCKS 51.158.105.107:16379",
        "SOCKS 51.195.139.95:44648",
        "SOCKS 8.142.3.145:3306",
        "SOCKS 149.202.75.85:36666",
        "SOCKS 173.236.187.104:40355",
        "SOCKS 5.102.109.41:999",
        "SOCKS 62.60.131.188:4767",
        "SOCKS 62.60.131.179:8101",
        "SOCKS 181.78.44.63:999",
        "SOCKS 134.122.21.142:33346",
        "SOCKS 154.127.219.242:999",
        "SOCKS 157.230.1.108:14070",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}