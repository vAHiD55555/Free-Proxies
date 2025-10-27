function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 167.172.159.43:39019",
        "SOCKS 51.75.126.150:57328",
        "SOCKS 221.202.27.194:10807",
        "SOCKS 194.233.78.142:42495",
        "SOCKS 121.37.119.129:10809",
        "SOCKS 182.53.202.208:8080",
        "SOCKS 49.0.26.183:1080",
        "SOCKS 51.158.98.211:16379",
        "SOCKS 91.151.88.220:6618",
        "SOCKS 144.91.78.34:20269",
        "SOCKS 117.74.65.207:80",
        "SOCKS 47.91.89.3:176",
        "SOCKS 137.184.228.194:40886",
        "SOCKS 222.71.131.131:1080",
        "SOCKS 103.171.83.25:10810",
        "SOCKS 163.172.131.178:16379",
        "SOCKS 47.79.43.52:1122",
        "SOCKS 51.158.124.167:16379",
        "SOCKS 177.234.194.31:999",
        "SOCKS 61.160.66.130:5555",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}