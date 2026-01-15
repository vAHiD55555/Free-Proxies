function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 149.202.75.85:36666",
        "SOCKS 181.78.44.63:999",
        "SOCKS 162.144.74.156:3620",
        "SOCKS 106.45.221.168:3256",
        "SOCKS 134.122.21.142:33346",
        "SOCKS 8.148.24.225:83",
        "SOCKS 223.113.89.138:1080",
        "SOCKS 159.65.69.186:9200",
        "SOCKS 121.205.213.141:4216",
        "SOCKS 15.207.196.77:3128",
        "SOCKS 222.129.36.157:57114",
        "SOCKS 206.189.130.107:8080",
        "SOCKS 51.15.5.21:60349",
        "SOCKS 27.153.141.90:4216",
        "SOCKS 205.185.126.51:5556",
        "SOCKS 78.12.223.246:2724",
        "SOCKS 176.113.73.102:3128",
        "SOCKS 114.96.218.231:3000",
        "SOCKS 47.239.61.82:9001",
        "SOCKS 51.222.241.8:42378",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}