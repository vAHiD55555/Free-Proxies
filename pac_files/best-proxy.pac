function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 159.89.113.155:8080",
        "SOCKS 141.11.42.163:1080",
        "SOCKS 79.122.230.20:8080",
        "SOCKS 144.91.78.34:20269",
        "SOCKS 62.60.131.181:4949",
        "SOCKS 36.255.98.153:4222",
        "SOCKS 185.236.202.170:3128",
        "SOCKS 5.133.219.4:63434",
        "SOCKS 42.117.172.190:4001",
        "SOCKS 47.88.104.126:3344",
        "SOCKS 185.123.101.174:3128",
        "SOCKS 62.60.131.181:4543",
        "SOCKS 36.255.98.177:4101",
        "SOCKS 36.255.98.154:7153",
        "SOCKS 163.5.128.53:14270",
        "SOCKS 36.255.98.161:5705",
        "SOCKS 210.16.160.222:7890",
        "SOCKS 178.49.22.23:1080",
        "SOCKS 36.255.98.179:4002",
        "SOCKS 159.8.114.37:80",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}