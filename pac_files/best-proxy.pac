function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 175.24.2.65:1080",
        "SOCKS 72.10.160.91:18749",
        "SOCKS 27.79.234.236:16000",
        "SOCKS 116.107.169.233:10001",
        "SOCKS 208.113.222.205:57226",
        "SOCKS 121.205.213.141:4216",
        "SOCKS 78.157.57.71:3128",
        "SOCKS 103.109.57.42:3629",
        "SOCKS 116.203.139.209:5678",
        "SOCKS 220.248.188.75:17211",
        "SOCKS 192.177.139.119:8000",
        "SOCKS 121.42.9.57:7201",
        "SOCKS 118.68.29.183:16000",
        "SOCKS 106.52.2.26:1080",
        "SOCKS 98.190.102.40:4145",
        "SOCKS 47.84.60.65:1111",
        "SOCKS 218.64.122.99:7302",
        "SOCKS 47.115.42.157:8044",
        "SOCKS 176.9.164.117:60018",
        "SOCKS 195.158.8.123:3128",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}