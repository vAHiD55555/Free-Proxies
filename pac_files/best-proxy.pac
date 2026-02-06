function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 209.141.58.213:5556",
        "SOCKS 51.222.241.8:42378",
        "SOCKS 144.91.78.34:20269",
        "SOCKS 194.28.162.12:1080",
        "SOCKS 221.202.27.194:10806",
        "SOCKS 223.25.109.146:8199",
        "SOCKS 80.76.34.133:8080",
        "SOCKS 66.245.197.108:9001",
        "SOCKS 147.45.231.249:8443",
        "SOCKS 85.214.244.174:3128",
        "SOCKS 115.221.242.131:9999",
        "SOCKS 67.205.153.110:51528",
        "SOCKS 188.235.142.248:1080",
        "SOCKS 18.141.177.23:80",
        "SOCKS 134.122.21.142:33346",
        "SOCKS 159.8.114.37:8123",
        "SOCKS 65.108.203.35:18080",
        "SOCKS 125.141.139.198:5566",
        "SOCKS 51.195.139.95:44648",
        "SOCKS 45.78.192.15:3128",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}