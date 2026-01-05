function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 188.93.213.242:1080",
        "SOCKS 62.60.131.183:4145",
        "SOCKS 222.127.156.134:8082",
        "SOCKS 181.214.39.72:5719",
        "SOCKS 51.15.240.207:16379",
        "SOCKS 49.12.212.161:2090",
        "SOCKS 36.255.98.160:16124",
        "SOCKS 72.10.160.91:9607",
        "SOCKS 121.42.9.57:7201",
        "SOCKS 115.127.106.226:1088",
        "SOCKS 62.60.131.186:4201",
        "SOCKS 51.222.241.8:42378",
        "SOCKS 190.119.76.148:8080",
        "SOCKS 138.199.25.13:3909",
        "SOCKS 47.79.40.185:12462",
        "SOCKS 51.15.196.107:16379",
        "SOCKS 164.163.43.102:10000",
        "SOCKS 202.58.77.194:8031",
        "SOCKS 201.139.115.206:8081",
        "SOCKS 51.158.105.107:16379",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}