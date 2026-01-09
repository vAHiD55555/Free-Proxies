function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 222.129.38.21:57114",
        "SOCKS 47.250.56.98:19190",
        "SOCKS 185.123.143.247:3128",
        "SOCKS 203.189.135.73:1080",
        "SOCKS 45.144.234.129:54972",
        "SOCKS 31.43.194.184:1080",
        "SOCKS 46.21.153.16:3128",
        "SOCKS 193.239.86.249:3128",
        "SOCKS 181.214.39.72:5719",
        "SOCKS 185.236.202.205:3128",
        "SOCKS 223.25.109.163:8199",
        "SOCKS 221.134.152.75:7302",
        "SOCKS 159.8.114.37:80",
        "SOCKS 218.78.65.202:6688",
        "SOCKS 91.107.138.98:2255",
        "SOCKS 188.166.252.135:8080",
        "SOCKS 5.255.117.250:1080",
        "SOCKS 103.4.77.27:8199",
        "SOCKS 103.154.178.192:8097",
        "SOCKS 51.89.68.78:9050",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}