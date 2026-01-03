function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 65.108.203.35:18080",
        "SOCKS 83.169.255.92:1080",
        "SOCKS 103.4.77.27:8199",
        "SOCKS 51.158.98.211:16379",
        "SOCKS 51.15.210.79:16379",
        "SOCKS 43.167.177.73:6006",
        "SOCKS 43.167.187.55:6006",
        "SOCKS 135.181.203.208:80",
        "SOCKS 178.33.162.89:58574",
        "SOCKS 43.167.184.55:6006",
        "SOCKS 51.15.240.207:16379",
        "SOCKS 222.129.36.157:57114",
        "SOCKS 125.141.133.49:5566",
        "SOCKS 51.15.5.21:60349",
        "SOCKS 115.221.245.167:1080",
        "SOCKS 43.133.23.48:6006",
        "SOCKS 202.40.179.186:64564",
        "SOCKS 109.245.231.73:8192",
        "SOCKS 43.167.169.231:6006",
        "SOCKS 62.60.131.180:47014",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}