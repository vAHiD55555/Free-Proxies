function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 184.178.172.28:15294",
        "SOCKS 208.113.155.120:41154",
        "SOCKS 114.99.200.41:3000",
        "SOCKS 106.52.2.26:1080",
        "SOCKS 181.78.49.177:999",
        "SOCKS 103.106.112.166:1234",
        "SOCKS 72.10.164.178:2493",
        "SOCKS 37.200.66.166:9051",
        "SOCKS 45.65.138.48:999",
        "SOCKS 222.129.37.77:57114",
        "SOCKS 188.166.104.152:49981",
        "SOCKS 72.10.160.90:1237",
        "SOCKS 172.104.4.144:9050",
        "SOCKS 143.198.147.156:8888",
        "SOCKS 222.129.32.188:57114",
        "SOCKS 45.65.137.218:999",
        "SOCKS 119.40.84.86:8010",
        "SOCKS 221.202.27.194:10811",
        "SOCKS 59.153.19.129:19201",
        "SOCKS 118.99.96.174:8080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}