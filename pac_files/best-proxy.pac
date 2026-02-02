function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 121.206.205.75:4216",
        "SOCKS 65.108.159.129:8081",
        "SOCKS 69.164.206.96:13024",
        "SOCKS 62.60.131.205:4972",
        "SOCKS 91.121.48.221:38711",
        "SOCKS 104.248.197.67:1080",
        "SOCKS 62.60.131.205:4096",
        "SOCKS 62.60.131.196:4149",
        "SOCKS 152.53.171.242:18574",
        "SOCKS 181.214.39.72:5719",
        "SOCKS 36.255.98.184:4052",
        "SOCKS 62.60.131.204:4048",
        "SOCKS 62.60.131.181:4150",
        "SOCKS 172.236.162.79:3128",
        "SOCKS 103.28.121.58:80",
        "SOCKS 193.34.95.110:8080",
        "SOCKS 207.254.71.62:8088",
        "SOCKS 193.239.86.248:3128",
        "SOCKS 62.60.131.205:4007",
        "SOCKS 36.255.98.167:4422",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}