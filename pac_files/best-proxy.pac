function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 217.144.187.3:1080",
        "SOCKS 46.21.153.16:3128",
        "SOCKS 85.214.94.28:3128",
        "SOCKS 167.172.109.12:39452",
        "SOCKS 8.140.104.98:3128",
        "SOCKS 161.202.226.194:8123",
        "SOCKS 94.100.18.111:3128",
        "SOCKS 195.154.43.198:39522",
        "SOCKS 193.56.255.179:3128",
        "SOCKS 119.84.215.127:3256",
        "SOCKS 144.91.78.34:20269",
        "SOCKS 123.54.197.18:22748",
        "SOCKS 120.224.234.71:7300",
        "SOCKS 104.248.146.99:3128",
        "SOCKS 5.57.38.64:27913",
        "SOCKS 51.38.155.24:46069",
        "SOCKS 51.158.124.167:16379",
        "SOCKS 110.235.248.81:1080",
        "SOCKS 186.137.21.165:6881",
        "SOCKS 20.210.39.153:8561",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}