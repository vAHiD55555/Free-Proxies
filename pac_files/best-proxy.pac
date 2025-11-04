function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 152.53.36.101:11161",
        "SOCKS 195.154.43.198:39522",
        "SOCKS 65.108.159.129:8081",
        "SOCKS 185.244.208.195:23699",
        "SOCKS 54.221.235.245:3128",
        "SOCKS 67.43.228.253:3881",
        "SOCKS 204.93.169.232:60755",
        "SOCKS 115.127.80.1:9090",
        "SOCKS 51.38.155.24:46069",
        "SOCKS 202.181.16.45:52929",
        "SOCKS 212.56.47.48:1083",
        "SOCKS 134.35.135.168:1080",
        "SOCKS 8.219.172.7:1011",
        "SOCKS 85.132.37.9:1313",
        "SOCKS 51.158.64.130:16379",
        "SOCKS 115.127.112.34:1080",
        "SOCKS 157.180.121.252:20341",
        "SOCKS 194.233.78.142:42495",
        "SOCKS 47.97.24.122:8222",
        "SOCKS 181.214.39.72:5719",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}