function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 167.172.109.12:41491",
        "SOCKS 84.17.51.241:3128",
        "SOCKS 51.75.126.150:57328",
        "SOCKS 51.158.172.165:8811",
        "SOCKS 3.24.178.81:80",
        "SOCKS 51.15.5.21:60349",
        "SOCKS 181.214.39.73:5719",
        "SOCKS 115.127.80.1:9090",
        "SOCKS 185.61.38.140:1080",
        "SOCKS 137.184.228.194:40886",
        "SOCKS 119.81.189.194:80",
        "SOCKS 120.224.234.71:7300",
        "SOCKS 125.141.139.198:5566",
        "SOCKS 89.249.65.191:3128",
        "SOCKS 114.236.93.203:15800",
        "SOCKS 161.202.226.194:8123",
        "SOCKS 36.111.205.203:6666",
        "SOCKS 51.38.155.24:46069",
        "SOCKS 188.166.30.17:8888",
        "SOCKS 123.182.233.70:7302",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}