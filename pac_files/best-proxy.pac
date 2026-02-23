function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 195.158.8.123:3128",
        "SOCKS 51.15.210.79:16379",
        "SOCKS 47.250.56.98:19190",
        "SOCKS 61.178.99.43:7302",
        "SOCKS 115.221.242.131:9999",
        "SOCKS 167.172.109.12:37355",
        "SOCKS 103.28.121.58:80",
        "SOCKS 193.216.224.108:8192",
        "SOCKS 185.6.9.176:8072",
        "SOCKS 193.239.86.249:3128",
        "SOCKS 185.244.208.195:23699",
        "SOCKS 51.15.196.107:16379",
        "SOCKS 125.141.133.98:5566",
        "SOCKS 178.128.167.129:1080",
        "SOCKS 37.27.100.107:443",
        "SOCKS 103.242.175.241:8899",
        "SOCKS 181.214.39.73:5719",
        "SOCKS 88.99.10.252:1080",
        "SOCKS 100.51.83.120:80",
        "SOCKS 180.183.97.16:8080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}