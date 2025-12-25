function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 1.180.0.162:7302",
        "SOCKS 181.214.39.73:5719",
        "SOCKS 103.145.30.46:1452",
        "SOCKS 51.38.155.24:46069",
        "SOCKS 203.189.151.19:1080",
        "SOCKS 208.113.155.120:41154",
        "SOCKS 195.133.8.14:8080",
        "SOCKS 128.140.76.145:11000",
        "SOCKS 37.200.66.166:9051",
        "SOCKS 172.104.4.144:9050",
        "SOCKS 72.221.196.157:35904",
        "SOCKS 120.77.203.0:443",
        "SOCKS 103.56.206.77:8099",
        "SOCKS 140.143.164.213:1080",
        "SOCKS 149.202.75.85:36666",
        "SOCKS 185.244.208.195:23699",
        "SOCKS 157.245.62.153:1080",
        "SOCKS 43.157.34.94:1777",
        "SOCKS 222.129.36.115:57114",
        "SOCKS 59.33.33.155:7890",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}