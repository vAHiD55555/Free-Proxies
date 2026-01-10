function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 181.214.39.73:5719",
        "SOCKS 62.60.131.195:4060",
        "SOCKS 205.185.120.241:5556",
        "SOCKS 34.96.238.40:8080",
        "SOCKS 103.114.53.2:8080",
        "SOCKS 51.158.172.165:8811",
        "SOCKS 47.236.147.45:1011",
        "SOCKS 144.91.78.34:20269",
        "SOCKS 62.60.131.188:4088",
        "SOCKS 183.164.226.253:4216",
        "SOCKS 62.60.131.188:8090",
        "SOCKS 38.194.224.134:1452",
        "SOCKS 167.172.109.12:37355",
        "SOCKS 120.77.203.0:443",
        "SOCKS 62.60.131.179:22223",
        "SOCKS 77.123.145.21:3128",
        "SOCKS 88.99.10.252:1080",
        "SOCKS 5.199.169.254:9090",
        "SOCKS 213.76.184.53:3128",
        "SOCKS 125.227.225.157:3389",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}